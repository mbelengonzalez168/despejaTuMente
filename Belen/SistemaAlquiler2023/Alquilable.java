package SistemaAlquiler2023;

import java.time.LocalDate;
import java.util.ArrayList;

public abstract class Alquilable {
	
	private ArrayList<Alquilable> alquilables;
	protected Cliente clientes;
	protected LocalDate inicioAlquiler;
	protected LocalDate devolucion;
	
	// esta disponible para alquilar
	public abstract boolean isDisponible();
	
	//alquilar
	public abstract void alquilar(Cliente c, LocalDate i, LocalDate d);
	
	// devolver
	public abstract void devolver();

	public LocalDate getDevolucion() {
		return devolucion;
	}
	
	

}
