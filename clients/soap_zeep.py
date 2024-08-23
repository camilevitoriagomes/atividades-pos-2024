import requests
from xml.dom.minidom import parseString
import zeep

# Define a URL do WSDL
wsdl_url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL"

# Inicializa o cliente Zeep
client = zeep.Client(wsdl=wsdl_url)

# Define o código do país para Noruega (NO)
country_code = "NO"

# Faz a chamada do serviço para obter o nome da capital
result = client.service.CapitalCity(sCountryISOCode=country_code)

# Imprime o resultado
print(f"A capital da Noruega ({country_code}) é {result}")


# Define a URL do WSDL
wsdl_url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL"

# Inicializa o cliente Zeep
client = zeep.Client(wsdl=wsdl_url)

# Recebe o número a ser convertido
numero = input("Digite um número para converter para extenso em inglês: ")

# Chama o serviço para converter o número
result = client.service.NumberToWords(ubiNum=numero)

# Imprime o resultado
print(f"O número {numero} por extenso em inglês é: {result}")