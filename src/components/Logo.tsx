interface LogoProps {
  /** altura em pixels (default 48) */
  size?: number;
  /** se true, força a versão branca (para fundos escuros) usando filtro */
  white?: boolean;
  className?: string;
}

/**
 * Mostra apenas o símbolo da logo Rede Evolução (crop CSS da imagem larga).
 * Imagem fonte: 673x181 (ratio ~3.72). Símbolo ocupa os primeiros ~27% da largura,
 * então mostramos uma janela quadrada (size x size) com object-position left.
 */
export default function Logo({ size = 48, white = false, className = '' }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="false"
      role="img"
      aria-label="Rede Evolução"
    >
      <img
        src="/logo-principal.png"
        alt="Rede Evolução"
        style={{
          height: size,
          width: 'auto',
          objectFit: 'cover',
          objectPosition: 'left center',
          filter: white ? 'brightness(0) invert(1)' : undefined,
        }}
        draggable={false}
      />
    </div>
  );
}
