import requests

api_url = "https://jsonplaceholder.typicode.com/users"


def list():
       return requests.get(api_url+"/users").json()
   
def read(user_id):
    response = requests.get(api_url+"/users"+user_id)
    if requests.status_codes == 200:
        return response.json()
    else:
        return False
   
def delete(user_id):
    response = requests.delete(api_url+"/users"+user_id)
    if response.status_code == 200:
        return True
    else:
        return False
    
def create(user_data):
    response = requests.post(api_url, json=user_data)
    if response.status_code == 201:
        print("Usuário criado com sucesso.")
        return response.json()
    else:
        print("Falha ao criar o usuário.")
        return None

def update(user_id, user_data):
    response = requests.patch(f"{api_url}/{user_id}", json=user_data)
    if response.status_code == 200:
        print("Usuário atualizado com sucesso.")
        return response.json()
    else:
        print(f"Falha ao atualizar o usuário com ID {user_id}.")
        return None
