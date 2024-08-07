from xml.dom.minidom import parse
import json


dom = parse("imobiliaria.xml")


imobiliaria = dom.documentElement

imoveis = imobiliaria.getElementsByTagName('imovel')

imobiliaria = [ ]

for imovel in imoveis:

    descricao = imovel.getElementsByTagName('descricao')[0]
    


    proprietario = imovel.getElementsByTagName('proprietario')[0]
    nome_element = proprietario.getElementsByTagName('nome')[0]
    nome = nome_element.firstChild.nodeValue
    email_elements = proprietario.getElementsByTagName('email')
    emails = [email.firstChild.nodeValue for email in email_elements]


    telefone_elements = proprietario.getElementsByTagName('telefone')
    telefones = [telefone.firstChild.nodeValue for telefone in telefone_elements]


    endereco = imovel.getElementsByTagName('endereco')[0]
    rua_element = endereco.getElementsByTagName('rua')[0]
    rua = rua_element.firstChild.nodeValue

    bairro_element = endereco.getElementsByTagName('bairro')[0]
    bairro = bairro_element.firstChild.nodeValue

    cidade_element = endereco.getElementsByTagName('cidade')[0]
    cidade = cidade_element.firstChild.nodeValue

    numero_elements = endereco.getElementsByTagName('número')
    numero = numero_elements[0].firstChild.nodeValue if numero_elements else None


    caracteristicas = imovel.getElementsByTagName('caracteristicas')[0]
    tamanho_element = caracteristicas.getElementsByTagName('tamanho')[0]
    tamanho = tamanho_element.firstChild.nodeValue

    num_quartos_element = caracteristicas.getElementsByTagName('numQuartos')[0]
    num_quartos = num_quartos_element.firstChild.nodeValue

    num_banheiros_element = caracteristicas.getElementsByTagName('numBanheiros')[0]
    num_banheiros = num_banheiros_element.firstChild.nodeValue

    valor_element = imovel.getElementsByTagName('valor')[0]
    valor = valor_element.firstChild.nodeValue


    imovel_dict = {
        "descricao": descricao,
        "proprietario": {
            "nome": nome,
            "emails": emails,
            "telefones": telefones
        },
        "endereco": {
            "rua": rua,
            "bairro": bairro,
            "cidade": cidade,
            "numero": numero
        },
        "caracteristicas": {
            "tamanho": tamanho,
            "numQuartos": num_quartos,
            "numBanheiros": num_banheiros
        },
        "valor": valor
    }

    imobiliaria.append(imovel_dict)


with open("imobiliaria.json", "w") as json_file:
    json.dump(imobiliaria, json_file, indent=2)

print(imobiliaria)
