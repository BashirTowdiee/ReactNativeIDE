import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import { useTokens, getColor } from '../design-system/tokens';
import { createStyles } from '../design-system/styles';

// If this were a real app, you'd have a proper login action
const loginAction = (username: string, password: string) => {
  return {
    type: 'AUTH/LOGIN',
    payload: { username, timestamp: new Date().toISOString() },
  };
};

type LoginScreenProps = {
  designing?: boolean;
};

export default function LoginScreen({ designing = false }: LoginScreenProps) {
  const tokens = useTokens();
  const styles = createStyles(tokens);
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      // Dispatch login action to Redux
      dispatch(loginAction(username, password));

      // Only navigate if we're not in designing mode
      if (!designing) {
        router.push('/story-list');
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <View style={{ width: '80%', maxWidth: 320 }}>
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          {/* App logo */}
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={{ width: 100, height: 100, marginBottom: 16 }}
          />

          <Text style={[styles.heading, { textAlign: 'center' }]}>
            itsumo{'\n'}benkyou
          </Text>

          <Text
            style={[
              styles.bodyText,
              { textAlign: 'center', color: tokens.baseColors.textColor },
            ]}
          >
            Study generated Japanese passages at your preferred length and JLPT
            level
          </Text>
        </View>

        {/* Login form */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
