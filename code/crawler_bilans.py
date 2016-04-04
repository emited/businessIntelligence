# -*- coding: utf-8 -*-
from BeautifulSoup import BeautifulSoup
from urlparse import urljoin
import urllib2
import argparse
import re
import codecs
import time
import random
import biurls
import pandas as pd

get_bil_page = lambda page: biurls.get_bil_urls()[page][0]


def crawl_page(page, verbose=False):

    try:
        page_url = get_bil_page(page)
        soup = BeautifulSoup(urllib2.urlopen(page_url).read())

    except Exception, e:
        print str(e)
        return []
    data={}
    rest=soup.findAll('h2',attrs={'class':"title accroche"},text='Informations Générales'.decode('utf-8'))
    rest=rest[0].next.next
    fj=''
    cap=''
    nbetab=''
    date=''
    data['url']=page_url
    try:
        fj=rest.find('td',{'class':'leftElement large1'},text='Forme juridique').next.next.next
        data['forme juridique']=fj
    except Exception, e:
        if verbose: print 'extract fail', str(e)
    try:
        cap=rest.find('td',{'class':'leftElement large1'},text='Capital').next.next.next
        cap=cap.split('&nbsp;&euro;')[0]
        data['capital']=cap
    except Exception, e:
        if verbose: print 'extract fail', str(e)
    try:
        nbetab=rest.find('td',{'class':'leftElement large1'},text='Nombre d\'établissements'.decode('utf-8')).next.next.next
        data['nombre etabl']=nbetab
    except Exception, e:
        if verbose: print 'extract fail', str(e)
    try:
        date=rest.find('td',{'class':'leftElement large1'},text='Création'.decode('utf-8')).next.next.next
        data['date creation']=date
    except Exception, e:
        if verbose: print 'extract fail', str(e)

    
    return data



def crawl():
    urls=biurls.get_bil_urls()
    results=[]
    for index in range(len(urls)):
        print('index: '+str(index))
        rest=crawl_page(index)
        rest['page']=index
        rest['siret']=urls[index][1]
        results.append(rest)
        #print rest
        print 'page crawled'
        time.sleep(random.randint(1, 2) * .931467298)
        if(index>5):
            break
    df=pd.DataFrame(results,index_col=False)
    df.to_csv('siret.csv',sep=';',index_col=True)
    
        

if __name__ == '__main__':
    crawl() 
