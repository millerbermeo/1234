import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { Input } from 'react-native-elements';

export const Formulario = ({ nom, cor}) => {
  // Inicializa el estado data con un objeto
  const [data, setData] = useState({
    nombre: nom,
    email: cor
  });

  // Función para manejar el envío del formulario
  const enviarFormulario = () => {
    Alert.alert(data.nombre);
    Alert.alert(data.email);
  };

  return (
    <>
      <Input
        label="Nombre"
        placeholder="Ingrese su Nombre"
        value={data.nombre}
        onChangeText={(nomb) => setData({ ...data, nombre: nomb })} // Actualiza solo el campo nombre en el estado data
        errorMessage={data.nombre === '' ? 'El nombre es obligatorio' : null}
      />

      <Input
        label="Correo Electrónico"
        placeholder="Ingrese su Correo Electrónico"
        value={data.email}
        onChangeText={(texto) => setData({ ...data, email: texto })} // Actualiza solo el campo email en el estado data
        errorMessage={
          data.email === '' ? 'El correo es obligatorio'
            : !data.email.includes('@') ? 'Correo electrónico no válido' : null
        }
      />

      <Button
        title="Enviar datos"
        onPress={enviarFormulario}
      />
    </>
  );
};
