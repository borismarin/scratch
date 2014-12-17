import java.util.List; 
import java.io.File;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import generated.*;
 
public class JAXBExample {
	public static void main(String[] args) {
 
		try {
 
			File file = new File("./test.xml");
			JAXBContext jaxbContext = JAXBContext.newInstance("generated");
 
			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
			NML nml = (NML) jaxbUnmarshaller.unmarshal(file);
			System.out.println(nml.getStandalones());
			// System.out.println(nml.getIaFCell());
 
		} catch (JAXBException e) {
			e.printStackTrace();
		}
 
	}
}

