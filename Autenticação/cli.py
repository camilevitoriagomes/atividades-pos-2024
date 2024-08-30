import requests
from requests.auth import HTTPBasicAuth 
from getpass import getpass 
user = input("user: ")
password = input("user: ")

name_user = input("digite o loguin do usuario para seguir: ") 
response = requests.delete(f'https://api.github.com/user/following/{name_user}', 
                         auth = HTTPBasicAuth (user , password))


print(response.status_code)
