import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Sydney Web Designer';
    const description = searchParams.get('description') || 'Premium Web Design & Digital Marketing';
    const type = searchParams.get('type') || 'service';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#1e293b',
            backgroundImage: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            padding: '80px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Brand Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '24px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {type}
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              flex: 1,
              justifyContent: 'center',
              maxWidth: '900px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.2,
                margin: 0,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '32px',
                color: '#e2e8f0',
                margin: 0,
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              borderTop: '4px solid #f59e0b',
              paddingTop: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                Sydney Web Designer
              </div>
              <div
                style={{
                  fontSize: '24px',
                  color: '#94a3b8',
                }}
              >
                sydneywebdesigner.com.au
              </div>
            </div>
            <div
              style={{
                fontSize: '120px',
                color: '#f59e0b',
                fontWeight: 700,
                opacity: 0.2,
              }}
            >
              D
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('Error generating OG image:', e.message);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
