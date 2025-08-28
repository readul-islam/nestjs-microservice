## Create Project

```
nest new projectName

```

## Create module service or controller into root

```
nest (generate or g) module task
nest (generate or g) service task
nest (generate or g) controller task
```

## Create a common library into the project

```
nest generate library libraryName

```

## Create module or service or controller into library

```
p = project

nest generate module database -p common
nest generate service database -p common
nest generate controller database -p common


```

## create microservice app

```
nest g app AppServiceName // example : Reservations
```

## create boilerplate of resource with cmd

```
nest generate resource reservations
```
