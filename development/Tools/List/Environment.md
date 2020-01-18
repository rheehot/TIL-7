Environment
--
@startuml

:nginx: -left-> (Web) 
:nginx: -left-> (App)
(pos)
(electron)  
usecase UC3
usecase (Last\nusecase) as UC4

@enduml