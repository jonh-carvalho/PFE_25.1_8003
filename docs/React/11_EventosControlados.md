# Eventos controlados

No React, **eventos controlados** são uma forma de gerenciar elementos de formulários (como `<input>`, `<textarea>`, `<select>`) onde o **valor exibido no elemento é totalmente controlado pelo estado (state) do React**, e as mudanças nesse valor são tratadas por funções de callback (como `onChange`).

---
## Introdução

### **📌 Características dos Eventos Controlados**

1. **O valor do elemento é sincronizado com o estado do React**  
   - O React é a "fonte da verdade" (single source of truth).
2. **Toda alteração passa por um `onChange` (ou evento similar)**  
   - O React atualiza o estado, que por sua vez atualiza o valor exibido.
3. **São a forma recomendada para formulários no React**  
   - Melhor controle sobre os dados.

---

### **🔄 Como Funciona?**
1. O valor do input é definido por uma variável de estado (`useState`).
2. Quando o usuário digita, o evento `onChange` é disparado.
3. O React atualiza o estado com o novo valor.
4. O componente é renderizado novamente, refletindo a mudança.

---

### **📝 Exemplo Prático**
#### **Input Controlado**

```jsx
import { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState(''); // Estado controla o valor

  const handleChange = (e) => {
    setText(e.target.value); // Atualiza o estado
  };

  return (
    <div>
      <input
        type="text"
        value={text} // Valor sincronizado com o estado
        onChange={handleChange} // Atualiza o estado quando o usuário digita
      />
      <p>Texto digitado: {text}</p>
    </div>
  );
}
```

#### **Formulário Controlado**
```jsx
import { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Atualiza apenas o campo alterado
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
```

---

### **🆚 Eventos NÃO Controlados (Uncontrolled)**
- **Não são sincronizados com o estado do React**.
- Usam `ref` para acessar o valor diretamente do DOM.
- Úteis para integração com bibliotecas externas ou quando o desempenho é crítico.

**Exemplo de Input NÃO Controlado:**

```jsx
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`Valor digitado: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Mostrar Valor</button>
    </div>
  );
}
```

---

### **✅ Vantagens dos Eventos Controlados**

✔ **Validação em tempo real** (ex: bloquear caracteres inválidos).  
✔ **Fácil manipulação antes de enviar dados** (ex: formatação).  
✔ **Integração com outros estados** (ex: habilitar/desabilitar botões).  
✔ **Mais previsível e alinhado com o fluxo do React**.

---

### **🔹 Conclusão**

- **Controlados**: O React gerencia o estado do input (`value` + `onChange`).  
- **Não controlados**: O DOM gerencia o valor (acessado via `ref`).  

**Use eventos controlados na maioria dos casos** para manter a consistência e facilitar o gerenciamento de formulários no React. 🚀