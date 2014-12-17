all: 
	rm -rf generated/
	xjc -verbose -b bind.xml test.xsd
	javac generated/ObjectFactory.java
	javac -cp . JAXBExample.java
	java JAXBExample
