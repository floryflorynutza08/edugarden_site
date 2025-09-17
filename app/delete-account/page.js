export const metadata = {
  title: "Ștergere cont | EduGarden",
  description:
    "Află cum îți poți șterge contul EduGarden și toate datele asociate.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-green-50 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Ștergere cont EduGarden
        </h1>

        <p className="text-gray-700 mb-6">
          Dacă dorești să îți ștergi contul EduGarden și toate datele asociate,
          poți face acest lucru direct din aplicație:
        </p>

        <ol className="list-decimal list-inside text-gray-800 mb-6 space-y-1">
          <li>Deschide aplicația <strong>EduGarden</strong>.</li>
          <li>Mergi la <strong>Setări → Ștergere cont</strong>.</li>
          <li>Confirmă acțiunea.</li>
        </ol>

        <p className="text-gray-700 mb-6">
          Toate datele asociate contului tău vor fi șterse definitiv în termen
          de maximum <strong>30 de zile</strong>.
        </p>

        <p className="text-gray-700">
          Dacă întâmpini probleme, ne poți contacta la{" "}
          <a
            href="mailto:support@edugarden.ro"
            className="text-green-700 font-semibold underline"
          >
            support@edugarden.ro
          </a>.
        </p>

        <hr className="my-8" />

        <p className="text-sm text-gray-600">
          English version available here:{" "}
          <a
            href="/en/delete-account"
            className="text-green-700 underline font-medium"
          >
            Delete account
          </a>
        </p>
      </div>
    </main>
  );
}