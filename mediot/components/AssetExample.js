import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     
      <Text >
       Somos diferentes al resto de supermercados, pero no te preocupes porque tenemos los productos esenciales para tu despensa. La mejor garantía es que los que nos prueban repiten, gracias a la garantía de nuestra política de devolución, “si algún producto no te gusta, te devolvemos tu dinero sin ticket y sin preguntas”.

Tenemos más de 1000 tiendas esperándote para que hagas tu compra con la máxima comodidad, confianza y los precios más bajos.
En nuestras tiendas puedes hacer tu despensa inteligente y encontrar todo lo que necesitas para la higiene y el cuidado de tu familia, tu negocio y de tu hogar, además, te sorprendemos cada mes con nuestra selección de productos de temporada en la canasta de Los Irrepetibles.
      </Text>
       <Image source={{uri: 'https://tiendas3b.com/en/wp-content/uploads/2019/01/productos-nosotros-3b.jpg'}}
       style={{width: 200, height: 150}} />
      
<Text>
       En Tiendas 3B estamos en la constante búsqueda de proveedores que puedan satisfacer nuestros estándares de calidad y volumen. Trabajamos de la mano con cada uno de ellos para encontrar los mejores productos o servicios y de esa manera satisfacer las necesidades y requerimientos de nuestros clientes.

Si te interesa ser nuestro proveedor, te invitamos a llenar el formulario.

En Tiendas 3B se analiza, valora y evalúa por los departamentos correspondientes todas las propuestas que se reciben a través de este medio.

</Text>
<Image source={{uri: 'https://th.bing.com/th/id/OIP.xixnc4lmJNoA9ucjdkziIAAAAA?pid=Api&rs=1'}}
       style={{width: 200, height: 100}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
 
 
});
