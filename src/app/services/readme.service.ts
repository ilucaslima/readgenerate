import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReadmeService {
  generateReadme(answers: { id: string; answer: string }[]): string {
    const answerMap = answers.reduce((acc, item) => {
      acc[item.id] = item.answer;
      return acc;
    }, {} as Record<string, string>);

    return `# ${answerMap['title'] || 'Projeto sem nome'}\n\n${
      answerMap['description'] || ''
    }\n\n---\n\n## 🌟 Recursos\n\n${
      answerMap['resources'] || ''
    }\n\n---\n\n## 🛠 Tecnologias\n\n${
      answerMap['technologies'] || ''
    }\n\n---\n\n## 🚀 Primeiros Passos\n\n### ✅ Pré-requisitos\n\n${
      answerMap['prerequisites'] || ''
    }\n\n### 📥 Instalação\n\n${
      answerMap['installation'] || ''
    }\n\n### ▶️ Como Usar\n\n${
      answerMap['start'] || ''
    }\n\n---\n\n## 🤝 Como Contribuir\n\n${
      answerMap['contributing'] || ''
    }\n\n---\n\n## 📄 Licença\n\nEste projeto está sob a **Licença MIT** – veja o arquivo LICENSE para detalhes.\n\n---\n\n## ✉️ Contato\n\n${
      answerMap['name'] || ''
    } ${answerMap['contact'] ? `→ [Contato](${answerMap['contact']})` : ''}\n`;
  }

  downloadReadme(content: string) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
