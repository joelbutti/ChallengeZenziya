
-- Nombre del cliente mas adulto

SELECT TOP(1) Nombre
FROM TClientes
ORDER BY Edad DESC   
-- La edad del cliente mas joven

SELECT TOP(1) Edad
FROM TClientes
ORDER BY Edad ASC
-- Los clientes que no tienen pedidos

SELECT * FROM TClientes c 
LEFT JOIN TPedidos p ON c.id_Cliente = p.id_Cliente 
WHERE p.id_Cliente IS NULL