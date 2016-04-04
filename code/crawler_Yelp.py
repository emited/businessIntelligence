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

#get_yelp_page = lambda page: biurls.get_urls()[page]
#get_yelp_page = lambda index: index

def crawl_page(page,index,verbose=False):
    """
    This method takes a page number, yelp GET param, and crawls exactly
    one page. We expect 10 listing per page.
    """
    
    
    try:
        page='?start='+str(page)
        page_url =index
        page_url=page_url+page
        print page_url
        soup = BeautifulSoup(urllib2.urlopen(page_url).read())

    except Exception, e:
        print str(e)
        return [],False
    
    revs=soup.findAll('div',attrs={'class':"review review--with-sidebar"})
    revs=revs[1:]
    all_reviews=[]
    rating=''
    comment=''
    author=''
    author_page=''
    author_friend_count=''
    author_review_count=''
    date=''
    for review in revs:
        rev_dict={}
        rev_dict['rest_url']=page_url
        try:
            rating=review.find('i', {'class':re.compile(r'^star-img')}).img['alt']
            rev_dict['rating']=float(rating[:3])
        except Exception, e:
            if verbose: print 'extract fail', str(e)
        try:
            comment=review.find('p', {'itemprop':"description"})
            #print type(comment.getText())
            #print comment.getText().text
            #print 'qksdjfhqjdfhsk'
            rev_dict['comment']=comment.getText()
        except Exception, e:
            if verbose: print 'extract fail', str(e)
        try:
            author=review.find('meta', {'itemprop':"author"})
            rev_dict['author']=author['content']
        except Exception, e:
            if verbose: print 'extract fail', str(e)
        try:
            author_page=review.find('a', {'class':"user-display-name"})
            rev_dict['author_page']=author_page['href']
        except Exception, e:
            rev_dict['author_page']=' '
            if verbose: print 'extract fail', str(e)
        try:
            date=review.find('meta', {'itemprop':"datePublished"})
            rev_dict['date']=date['content']
        except Exception, e:
            if verbose: print 'extract fail', str(e)
        try:
            author_friend_count=review.find('li', {'class':re.compile(r'^friend-count')})
            rev_dict['author_friend_count']=int(author_friend_count.find('b').next)
        except Exception, e:
            if verbose: print 'extract fail', str(e)
        try:
            author_review_count=review.find('li', {'class':re.compile(r'^review-count')})
            rev_dict['author_review_count']=int(author_review_count.find('b').next)
        except Exception, e:
            if verbose: print 'extract fail', str(e)
        


        all_reviews.append(rev_dict)
    #print all_reviews
    with open('html.txt','w') as f:
        f.write(str(revs))
    
    return all_reviews, True

def write_csv(review_list,filename):
    with open('Yelp.csv', 'ab') as csvfile:
        df=pd.DataFrame(review_list)
        df.to_csv(csvfile,sep=';',encoding='utf-8',index=False)



def crawl():
   
    for index in biurls.get_urls():
        
        soup = BeautifulSoup(urllib2.urlopen(index).read())
        restaurants = soup.findAll('div', attrs={'class':re.compile(r'^search-result natural-search-result')})
        for r in restaurants[0:1]:
            yelpPage = ''
            try:
                yelpPage = r.find('a', {'class':'biz-name'})['href']
            except Exception, e:
                if verbose: print 'yelp page link extraction fail', str(e)
            for i,l in enumerate(yelpPage):
                if l == '?':
                    yelpPage = yelpPage[:i]
            index='http://www.yelp.fr'+yelpPage
            page = 0
            flag = True
            print('index: '+str(index))
            print('page: '+str(page))
            while flag:
                review,flag=crawl_page(page,index)
                print len(review)
                write_csv(review,'Yelp.csv')
                print 'page crawled'
                if (len(review)<20):
                    print 'extraction stopped '
                    flag= False
                page += 20
                time.sleep(random.randint(1, 2) * .931467298)
        


if __name__ == '__main__':
    
    crawl()
 
