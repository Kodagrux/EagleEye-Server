#https://pypi.python.org/pypi/python-firebase/1.2

from firebase import firebase

firebase = firebase.FirebaseApplication('https://eagleeye-dfbc4.firebaseio.com', None)
result = firebase.get('/ee-sub-test', None)
print(result)