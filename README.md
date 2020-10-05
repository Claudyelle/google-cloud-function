# Topicos Especiais III - Trabalho I - Google Cloud

## Descrição do trabalho
Joãozinho está fazendo uma coleção de dados de todos os carros que ele já viu. 
Para guardar esses dados ele quer salvar no datastore/firestore os carros com seus atributos placa, cor, preço, modelo e marca para isso você deverá implementar uma google cloud function, em qualquer linguagem que seja possível, que receba uma requisição http com os atributos mencionados e salve no datastore. 

Faça uma outra function que seja capaz de mostrar os dados de um veículo recebendo a placa como parâmetro. 

O trabalho deve ser comitado no git (github, gitlab) deve ter um readme.md mostrando o endpoint que deve ser usado para enviar os dados e para ler os dados, bem como um print do resultado da chamada da function, um mostrando o dado persistido no DataStore e outro print demonstrando a function que busca os dados. 


## Endpoints

**Url de exemplo para envio dos dados:** https://us-central1-trabalhocarros.cloudfunctions.net/criarCarros?placa=qqq9999&cor=Prata&preco=49000&modelo=Palio&marca=Fiat

**Mostrar dados de um veículo pela placa:** https://us-central1-trabalhocarros.cloudfunctions.net/getCarByPlaque?placa=qqq9999

## Screenshots
<img src="./.github/firestore.png?raw=true"/>

<img src="./.github/criarcarros.png?raw=true"/>

<img src="./.github/getCarByPlaque.png?raw=true"/>
