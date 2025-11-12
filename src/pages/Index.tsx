import { useEffect, useState } from 'react';

const KettleVideoAnimation = () => {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const scenes = [
      { duration: 2000, next: 1 },
      { duration: 2000, next: 2 },
      { duration: 2000, next: 3 },
      { duration: 1000, next: 0 }
    ];

    const timer = setTimeout(() => {
      setScene(scenes[scene].next);
    }, scenes[scene].duration);

    return () => clearTimeout(timer);
  }, [scene]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    tx: (Math.random() - 0.5) * 100,
    ty: -50 - Math.random() * 50
  }));

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-background via-background to-muted overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />

      {scene === 0 && (
        <div className="absolute inset-0 flex items-center justify-center animate-zoom-in">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow-pulse" />
            <div className="relative z-10 bg-card rounded-3xl p-12 border border-primary/30 backdrop-blur-sm">
              <div className="w-64 h-64 bg-gradient-to-br from-secondary/30 to-muted rounded-2xl flex items-center justify-center">
                <div className="text-8xl animate-rotate-slow">🫖</div>
              </div>
              <h3 className="mt-8 text-3xl font-playfair font-bold text-primary text-center tracking-wide">
                LUMINA KETTLE
              </h3>
              <p className="mt-2 text-muted-foreground text-center text-sm tracking-widest">
                PREMIUM COLLECTION
              </p>
            </div>
          </div>
        </div>
      )}

      {scene === 1 && (
        <div className="absolute inset-0 flex items-center justify-center animate-zoom-in">
          <div className="relative max-w-4xl">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-sm font-playfair text-primary/60 tracking-[0.3em] animate-fade-in">
              CRAFTSMANSHIP
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="relative bg-card/80 backdrop-blur-md rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="text-7xl mb-4 animate-slide-up">💎</div>
                  <h4 className="text-xl font-playfair text-primary mb-2">Кристальное стекло</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Боросиликатное стекло высшего качества. Термостойкость до 180°C.
                  </p>
                </div>
              </div>
              <div className="relative group" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="relative bg-card/80 backdrop-blur-md rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="text-7xl mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>⚡</div>
                  <h4 className="text-xl font-playfair text-primary mb-2">Мощный нагрев</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    2400W элемент. Кипячение 1.7л за 3 минуты.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {scene === 2 && (
        <div className="absolute inset-0 flex items-center justify-center animate-zoom-in">
          <div className="relative">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float"
                style={{
                  left: `${p.left}%`,
                  top: '50%',
                  animationDelay: `${p.delay}s`,
                  // @ts-ignore
                  '--tx': `${p.tx}px`,
                  '--ty': `${p.ty}px`
                }}
              />
            ))}
            <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-16 border border-primary/30">
              <div className="text-9xl mb-6 animate-glow-pulse">✨</div>
              <h3 className="text-4xl font-playfair font-bold text-primary mb-3 tracking-wide">
                Подсветка
              </h3>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Синяя LED-подсветка создаёт магическую атмосферу во время кипячения
              </p>
            </div>
          </div>
        </div>
      )}

      {scene === 3 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in">
          <div className="text-8xl mb-8 animate-zoom-in">🫖</div>
          <h2 className="text-5xl font-playfair font-bold text-primary mb-4 tracking-wider animate-slide-up">
            LUMINA KETTLE
          </h2>
          <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-px w-16 bg-primary/50" />
            <p className="text-muted-foreground text-sm tracking-[0.3em]">ПРЕМИУМ ЭЛЕКТРОЧАЙНИК</p>
            <div className="h-px w-16 bg-primary/50" />
          </div>
          <div className="text-6xl font-playfair font-bold text-primary animate-slide-up" style={{ animationDelay: '0.4s' }}>
            12 990 ₽
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              scene === i ? 'bg-primary w-8' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default KettleVideoAnimation;
