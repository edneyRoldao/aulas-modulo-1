
public class Fibonnacci {
	public static void main(String[] args) {
		int anterior = 0;
		int proximo = 1;
		System.out.println(anterior);

		while(proximo < 50) {
			proximo = proximo + anterior;
			anterior = proximo -anterior;
			
			System.out.println(proximo);
		}
		
	}
}