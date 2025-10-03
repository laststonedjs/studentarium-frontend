import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { registerUser } from "../api/authApi";
import CustomButton from "../components/CustomButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  // dropdown states
  const [majorOpen, setMajorOpen] = useState(false);
  const [majorValue, setMajorValue] = useState<string | null>(null);
  const [majorItems, setMajorItems] = useState([
    { label: "IT", value: "IT" },
    { label: "Drustvene nauke", value: "Economics" },
    { label: "Matematika", value: "Mathematics" },
    { label: "Menadzment", value: "Mathematics" },
  ]);

  const [cityOpen, setCityOpen] = useState(false);
  const [cityValue, setCityValue] = useState<string | null>(null);
  const [cityItems, setCityItems] = useState([
    { label: "Sarajevo", value: "Sarajevo" },
    { label: "Mostar", value: "Mostar" },
    { label: "Tuzla", value: "Tuzla" },
    { label: "Zenica", value: "Zenica" },
    { label: "Banja Luka", value: "Banja Luka" },
  ]);
  
  const handleRegister = async () => {
    try {
      const user = await registerUser(email, password);
      console.log("Registered user:", user);
      Alert.alert("Success", `User ${user.email} registered successfully!`);
    } catch (err) {
      console.log("Registration error:", err);
      Alert.alert("Error", "Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registracija</Text>

        <TextInput
          style={styles.input}
          placeholder="Ime i Prezime"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email adresa"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Korisničko ime"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Lozinka"
          value={email}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Fakultet"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {/* dropdown za smjer */}
        <DropDownPicker
          open={majorOpen}
          value={majorValue}
          items={majorItems}
          setOpen={setMajorOpen}
          setValue={setMajorValue}
          setItems={setMajorItems}
          placeholder="Odaberite smjer"
          placeholderStyle={{ color: "#ffffffc5" }}
          style={[styles.dropdown, { backgroundColor: "#313bf5",  borderColor: "#ccc" }]}
          dropDownContainerStyle={styles.dropdownContainer}
          labelStyle={{ color: "#ffffffc5" }}
          zIndex={3000}
          ArrowDownIconComponent={({ style }) => (
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" style={style} />
          )}
          ArrowUpIconComponent={({ style }) => (
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" style={style} />
          )}
        />
        {/* dropdown za grad */}
        <DropDownPicker
          open={cityOpen}
          value={cityValue}
          items={cityItems}
          setOpen={setCityOpen}
          setValue={setCityValue}
          setItems={setCityItems}
          placeholder="Odaberite grad"
          placeholderStyle={{ color: "#ffffffc5" }}
          style={[styles.dropdown, { backgroundColor: "#313bf5",  borderColor: "#ccc" }]}
          dropDownContainerStyle={styles.dropdownContainer}
          labelStyle={{ color: "#ffffffc5" }}
          zIndex={2000}
          ArrowDownIconComponent={({ style }) => (
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" style={style} />
          )}
          ArrowUpIconComponent={({ style }) => (
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" style={style} />
          )}
        />
      </View>
      <View style={styles.footerBtn}>
        <CustomButton title="Registrujte se" onPress={handleRegister} />
       
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              padding: 10,
              alignItems: "center",
            }}
            onPress={() => {
            // navigacija na Login screen
            // navigation.navigate("Login");
            }}
          >
            <Text style={{ 
              textAlign: "center", 
              color: "#ffffffb6", 
              fontSize: 16, 
              fontStyle: "italic",
              marginTop: 10
              }}>
                Vratite se na prijavu
             </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#313bf5"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    gap: 5
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 0.4,
    lineHeight: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 30,
  },
  dropdown: {
    marginBottom: 15,
    borderRadius: 30,
  },
  dropdownContainer: {
    borderRadius: 20,
    backgroundColor: "#80aaff",
    elevation: 5
  },
  footerBtn: {
    marginBottom: 40,
  }
});

