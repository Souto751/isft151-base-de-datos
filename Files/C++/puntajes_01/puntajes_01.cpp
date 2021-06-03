#include <iostream>
#include <fstream>
#include <string>
#include <vector>

struct Jugador {
    std::string nombre;
    int puntaje;
    std::string tiempo;
};

Jugador split(std::string str, char pattern) {
    
    int posInit = 0;
    int posFound = 0;
    int attribute = 1;
    std::string splitted;
    Jugador jugador_aux;
    
    while(posFound >= 0){
        posFound = str.find(pattern, posInit);
        splitted = str.substr(posInit, posFound - posInit);
        posInit = posFound + 1;
        switch(attribute){
            case 1:
                jugador_aux.nombre = splitted;
                attribute++;
                break;
            case 2:
                jugador_aux.puntaje = stoi(splitted);
                attribute++;
                break;
            case 3:
                jugador_aux.tiempo = splitted;
                attribute++;
                break;
        };
    }
    
    return jugador_aux;
}

void guardar_puntajes(std::string nombre_archivo, Jugador puntajes){
    std::ofstream archivo;
    archivo.open(nombre_archivo, std::fstream::app);
    archivo << puntajes.nombre << "," << puntajes.puntaje << "," << puntajes.tiempo << std::endl;
    archivo.close();
}

std::vector<Jugador> recuperar_puntajes(std::string nombre_archivo){
    std::ifstream archivo;
    std::string get_aux;
    std::vector<Jugador> jugadores;
    Jugador jugador_aux;
    archivo.open(nombre_archivo);
        while(getline(archivo, get_aux)){
            jugador_aux = split(get_aux, ',');
            jugadores.push_back(jugador_aux);
        };
    archivo.close();

    return jugadores;
}

int main(){
    Jugador player1 = {"Agustin", 750, "7:57"};
    Jugador player2 = {"Melissa", 777, "7:07"};
    std::vector<Jugador> lista;

    guardar_puntajes("puntajes.txt", player1);
    guardar_puntajes("puntajes.txt", player2);

    lista = recuperar_puntajes("puntajes.txt");
    
    for(int i = 0; i < lista.size(); i++){
        std::cout << lista[i].nombre << " | " << lista[i].puntaje << " | " << lista[i].tiempo << std::endl;
    }

    return 0;
}