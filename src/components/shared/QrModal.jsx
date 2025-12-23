import { useRef } from 'react';
import { X, Download, Copy } from 'lucide-react';
import { QRCode } from 'qrcode.react';
export default function QrModal({ qrCodeValue, vehicleId, onClose }) {
  const qrCodeRef = useRef();
  const publicLink = `https://autorah-pasaporte-global-j9756.vercel.app/public/vehicle/${qrCodeValue}`;

  const handleDownloadQr = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `AUTORAH_QR_${vehicleId}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicLink)
      .then(() => alert('Enlace público copiado al portapapeles'))
      .catch(err => console.error('Error al copiar el enlace:', err));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#151921] rounded-xl border border-gray-800 w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Código QR del Vehículo</h2>
        
        <div className="flex justify-center mb-6" ref={qrCodeRef}>
          <QRCode 
            value={publicLink}
            size={256}
            level="H"
            includeMargin={true}
            bgColor="#151921"
            fgColor="#FFFFFF"
          />
        </div>

        <p className="text-center text-gray-400 text-sm mb-6">
          Escanea este código para ver el historial público del vehículo.
        </p>

        <div className="flex flex-col gap-3">
          <button 
            onClick={handleDownloadQr}
            className="w-full bg-[#1E5EFF] hover:bg-[#3C7BFF] py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-5 h-5" />
            Descargar QR
          </button>
          <button 
            onClick={handleCopyLink}
            className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-colors"
          >
            <Copy className="w-5 h-5" />
            Copiar Enlace Público
          </button>
        </div>
      </div>
    </div>
  );
}
