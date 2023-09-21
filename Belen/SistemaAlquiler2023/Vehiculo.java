package SistemaAlquiler2023;

import java.time.LocalDate;

public class Vehiculo extends Alquilable {
	
	private String marca; 
	private double kms; 
	private String patente;
	private String carga;
	private boolean alquilado;
	
	//los vehículos sólo pueden ser alquilados	a un cliente por vez
	@Override
	public boolean isDisponible() {
		return alquilado;
	}
	@Override
	public void alquilar(Cliente c, LocalDate i, LocalDate d) {
		if(alquilado!=true) {
			alquilado = true;
			super.clientes =c;
			super.inicioAlquiler =i;
			super.devolucion =d;
		}	
	}
	
	@Override
	public void devolver() {
		alquilado = false;
		super.clientes= null;
		super.inicioAlquiler =null;
		super.devolucion =null;
		
		
	}
	
}
