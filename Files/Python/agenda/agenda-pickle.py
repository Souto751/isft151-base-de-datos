# agenda-pickle.py: Diferencia de agenda con datos en pickle

import pickle

ARCHIVO="agenda.dat"

def leer_datos(archivo):
    """ Carga todos los datos del archivo en una lista y la devuelve."""
    abierto = open(archivo)
    datos = pickle.load(archivo)
    abierto.close()
    return datos

def guardar_datos(datos, archivo):
    """ Guarda los datos recibidos en el archivo. """
    abierto = open(archivo,"w")
    pickle.dump(archivo, datos)
    abierto.close()