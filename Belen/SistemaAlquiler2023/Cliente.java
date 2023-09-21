package SistemaAlquiler2023;

import java.time.LocalDate;
import java.util.ArrayList;

public class Cliente {
	
	private ArrayList<Alquilable> alquileres;
	
	public boolean isAtrasado (LocalDate hoy) {
		boolean atraso = false;
		int i = 0;
		while (i<alquileres.size()) {
			if((alquileres.get(i).getDevolucion()!=null)&&
					(alquileres.get(i).getDevolucion().isAfter(hoy))){
				atraso = true;
			}
		}
		return atraso;
	}

}
