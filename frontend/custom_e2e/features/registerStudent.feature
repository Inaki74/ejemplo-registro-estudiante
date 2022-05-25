Feature: Registrar Estudiante
Como estudiante
Quiero poder registrar mi nombre, apellido y numero de estudiante
Para poder utilizar la plataforma.

@myTag
Scenario: Registro positivo de estudiante
    Given un estudiante con nombre "Alberto"
    And apellido "Gonzalez"
    And numero de estudiante "262626"
    When el estudiante intenta registrarse
    Then se agrega el estudiante al sistema
    And el sistema avisa que el estudiante fue agregado.