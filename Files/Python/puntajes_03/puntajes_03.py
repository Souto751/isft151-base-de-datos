import puntajes_csv    

valores = [("Pepe", 108, "4:16"), ("Juana", 2315, "8:42")]
puntajes_csv.guardar_puntajes("puntajes.dat", valores)
recuperado = puntajes_csv.recuperar_puntajes("puntajes.dat")
print(recuperado)