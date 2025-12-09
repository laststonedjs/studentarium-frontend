import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { loginUser } from "../api/authApi";

type LoginScreenNavProp = NativeStackNavigationProp<RootStackParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
        Alert.alert("Error", "Please enter your credentials.");
        return;
    }

    try {
        const { user, token } = await loginUser(email, password);
        console.log("Login success: ", user, token);

        // saving token and user in AsyncStorage
        await AsyncStorage.multiSet([
            ["token", token],
            ["user", JSON.stringify(user)],
        ]);

        setPassword("");
        Alert.alert("Success!", "You're logged in successfully!", [
            {
                text: "OK",
                onPress: () => navigation.navigate("Home")
            }
        ]);
    } catch (error) {
        console.log("Login error: ", error);
        Alert.alert("Error!", "Wrong email or password");
    }
  }

  const goToRegister = () => {
    navigation.navigate("Register");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>studentarium</Text>
          <Text style={styles.subtitle}>
            Znanje je jedino bogatstvo koje se dijeljenjem umnožava!
          </Text>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9a9a9a"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Lozinka"
            placeholderTextColor="#9a9a9a"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.primaryButtonWrapper}>
            <CustomButton title="Prijava" onPress={handleLogin} />
          </View>

          <TouchableOpacity onPress={() => { /* TODO: forgot password screen */ }}>
            <Text style={styles.forgotPasswordText}>Zaboravili ste lozinku?</Text>
          </TouchableOpacity>
        </View>

        {/* BOTTOM SECTION */}
        <View style={styles.bottomSection}>
          <Text style={styles.noAccountText}>Nemate nalog?</Text>
          <TouchableOpacity style={styles.outlinedButton} onPress={goToRegister}>
            <Text style={styles.outlinedButtonText}>Registrujte se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313bf5",
    paddingBottom: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    textTransform: "lowercase",
    marginBottom: 8,
    letterSpacing: 0.8,
  },
  subtitle: {
    color: "#ffffffd0",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 260,
    letterSpacing: 0.3
  },
  form: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 15,
    color: "#000"
  },
  primaryButtonWrapper: {
    marginTop: 8,
    marginBottom: 10,
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "#ffffffb6",
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 4,
  },
  bottomSection: {
    // alignItems: "center",
    marginTop: 16,
    marginBottom: 8
  },
  noAccountText: {
    color: "#ffffffb6",
    marginBottom: 8,
    textAlign: "center",
    fontStyle: "italic"
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: "#ffffffb6",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 32,
    minWidth: "70%",
    alignItems: "center",
    alignSelf: "center"
  },
  outlinedButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});