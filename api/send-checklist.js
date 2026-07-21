// /api/send-checklist.js
// Vercel Serverless Function. Sends a real email with a link to the requested
// checklist PDF, using Resend. The API key stays server-side only (set as a
// Vercel environment variable, RESEND_API_KEY) — never exposed to the browser.
//
// Requires, before this works in production:
//   1. A Resend account (free tier: resend.com) with wolfallies.com added and
//      verified as a sending domain (DNS records added at your registrar).
//   2. RESEND_API_KEY set in the Wolf Allies Vercel project's Environment
//      Variables (Project Settings -> Environment Variables), not committed
//      to the repo.

const CHECKLISTS = {
  trustee: {
    file: 'trustee-checklist.pdf',
    title: 'California Trustee House Sale Checklist',
    subject: 'Your California Trustee House Sale Checklist',
  },
  executor: {
    file: 'executor-checklist.pdf',
    title: 'California Executor Checklist',
    subject: 'Your California Executor Checklist',
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, checklist } = req.body || {};
  const selected = CHECKLISTS[checklist];

  if (!name || !email || !selected) {
    return res.status(400).json({ error: 'Missing or invalid name, email, or checklist type.' });
  }

  const downloadUrl = `https://wolfallies.com/${selected.file}`;
  const firstName = String(name).trim().split(' ')[0] || 'there';

  const html = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; color: #1a1a18; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
      <p style="font-size: 15px; line-height: 1.6;">Hi ${firstName},</p>
      <p style="font-size: 15px; line-height: 1.6;">As requested, here is your free copy of the <strong>${selected.title}</strong>.</p>
      <p style="margin: 28px 0;">
        <a href="${downloadUrl}" style="background: #5c6b52; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 2px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;">Download Your Checklist</a>
      </p>
      <p style="font-size: 13px; line-height: 1.6; color: #3d3d38;">If the button doesn't work, copy and paste this link into your browser:<br>${downloadUrl}</p>
      <p style="font-size: 13px; line-height: 1.6; color: #3d3d38; margin-top: 24px;">William B. Plevy, California Real Estate Broker (DRE #01956776) and member of the California State Bar.<br>Wolf Allies · wolfallies.com</p>
    </div>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Wolf Allies <checklist@wolfallies.com>',
        to: [email],
        subject: selected.subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errBody = await resendResponse.text();
      console.error('Resend API error:', errBody);
      return res.status(502).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('send-checklist error:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}
