export function gerarPrefixo(tipo: string): string {
    const mapa = {
      ELETRICO: 'ELT',
      MECANICO: 'MEC',
      ELETRONICO: 'ELC',
      HIDRAULICO: 'HID',
      PNEUMATICO: 'PNE',
      OUTRO: 'OUT'
    };
    return mapa[tipo as keyof typeof mapa] || 'OUT';
  }