
export default function DeleteAccountPageEN() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-green-50 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Delete EduGarden account
        </h1>

        <p className="text-gray-700 mb-6">
          If you want to delete your EduGarden account and all associated data,
          you can do it directly from the app:
        </p>

        <ol className="list-decimal list-inside text-gray-800 mb-6 space-y-1">
          <li>Open the <strong>EduGarden</strong> app.</li>
          <li>Go to <strong>Settings → Delete account</strong>.</li>
          <li>Confirm the action.</li>
        </ol>

        <p className="text-gray-700 mb-6">
          All data associated with your account will be permanently deleted
          within a maximum of <strong>30 days</strong>.
        </p>

        <p className="text-gray-700">
          If you encounter any issues, you can contact us at{" "}
          <a
            href="mailto:support@edugarden.ro"
            className="text-green-700 font-semibold underline"
          >
            support@edugarden.ro
          </a>.
        </p>

        <hr className="my-8" />

        <p className="text-sm text-gray-600">
          Versiunea în limba română este disponibilă aici:{" "}
          <a
            href="/delete-account"
            className="text-green-700 underline font-medium"
          >
            Ștergere cont
          </a>
        </p>
      </div>
    </main>
  );
}