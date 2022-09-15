# __Amazon Cloud Services__
AWS Lambda and Serverless

### Iniciando 	:checkered_flag:
#### Instalação via __npm__
```
$ npm install -g serverless
```
#### Chamando o console
```
$ serverless
```
![image](https://user-images.githubusercontent.com/62576977/190281192-c6e00520-1eba-4b4d-9171-de939ea364b8.png)

### DEPLOY :rocket:

Gerendo o biuld te todos os arquivos 
```
$ serverless deploy
```

Podendo realizar de uma forma mais simples e rapida

:warning: Apenas em situações de mudança/alteração em funções :warning:

```
$ serverles deploy function -f "_name_"
```

### INVOKE :outbox_tray:

```
$ serverless invoke -f "_name_"
```
Com log
```
$ serverless invoke -f "_name_" --log
```

### LOGS :gear:
Para ver todos os logs da função
```
$ serverless logs -f  "_name_"
```

### DELETE :wastebasket:
Dentro do diretorio do projeto
```
$ serverless remove 
```
