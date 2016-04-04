import pandas as pd

def get_urls():
    data=pd.read_csv('../data/inspections-restaurants.csv',sep=';')
    data.head()
    names=[(n.lower()).replace(' ','+') for n in data['Nom']]
    """for l in data["Code commune"]:
    		#print str(l)[:2]
    		if(str(l)[:2]=='75'):
    				print l,type(l)
    				print '750'+str(l)[-2:]"""
    loc=['750'+str(l)[-2:] if(str(l)[:2]=='75') else str(l) for l in data['Code commune']]
    path='https://www.yelp.fr/search?'
    urls=[]
    for i in range(len(data)):
        urls.append(path+'find_desc='+names[i]+'&find_loc='+str(loc[i]))
    return urls


def get_bil_urls():
    data=pd.read_csv('inspections-restaurants.csv',sep=';')
    siret=data['SIRET'].values
    urls=[]
    for s in siret:
        url='http://www.bilansgratuits.fr/entreprise/fiche/'+str(s)+'.htm'
        siret=s
        urls.append((url,siret))
    return urls
