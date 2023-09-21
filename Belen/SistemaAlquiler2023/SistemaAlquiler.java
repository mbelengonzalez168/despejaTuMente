package SistemaAlquiler2023;

import java.time.LocalDate;
import java.util.ArrayList;

public class SistemaAlquiler {
	
	private ArrayList<Cliente> clientes;
	private ArrayList<Alquilable> alquilables;
	
	//conocer quiénes son los 	clientes que poseen alquileres vencidos
	
	public ArrayList<Cliente> atrasados(LocalDate hoy){
		ArrayList<Cliente> atrasados = new ArrayList<Cliente>();
		for (int i=0; i<clientes.size(); i++) {
			if(clientes.get(i).isAtrasado(hoy) == true) {
				atrasados.add(clientes.get(i));
			}
		}
		return atrasados;
	}
	
}
