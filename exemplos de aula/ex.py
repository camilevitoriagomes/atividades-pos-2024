import requests
from requests.auth import HTTPBasicAuth
from getpass import getpass
user = input("user: ")
password = "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"

user = input("digite o loguin do usuario para conhecer seus seguidores: ")

response = requests.get(f'https://api.github.com/users/{user}/following/',
    auth = HTTPBasicAuth('camilevitoriagomes', password))

for seguidor in response.json():
    print (seguidor['login'])

#imprimir quantidade de repositorios publicos
print(response.status_code)