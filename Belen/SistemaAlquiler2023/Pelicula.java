package SistemaAlquiler2023;

import java.time.LocalDate;

public class Pelicula extends Alquilable{
	
	private String nombre;
	private String informacion;
	private int cantCopias;
	
	//Una película puede ser alquilada si hay copias aún disponibles
	@Override
	public boolean isDisponible() {
		return cantCopias>=1;
	}
	
	@Override
	public void alquilar (Cliente c, LocalDate i, LocalDate d) {
		if(isDisponible()==true) {
			cantCopias--;
			super.clientes=c;
			super.inicioAlquiler =i; 
			super.devolucion = d;
		}
		
	}
	@Override
	public void devolver() {
		cantCopias++;
		super.clientes= null;
		super.inicioAlquiler =null;
		super.devolucion =null;	
	}
	
	
}
