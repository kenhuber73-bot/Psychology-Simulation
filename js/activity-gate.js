/**
 * Activity Gate — checks a per-activity share-link token before revealing content.
 *
 * HOW TO USE ON AN ACTIVITY PAGE (when you're ready to gate it):
 *
 * 1. Load supabase-config.js BEFORE this script (it needs `window.sb`).
 * 2. Wrap the page's real content in a container, hidden by default:
 *
 *      <div id="activity-content" style="display:none;">
 *        ...the actual activity...
 *      </div>
 *
 * 3. Add a locked-state message, shown by default:
 *
 *      <div id="activity-locked">
 *        <p>This activity requires a link from your teacher.</p>
 *      </div>
 *
 * 4. At the bottom of the page, call:
 *
 *      <script src="js/supabase-config.js"></script>
 *      <script src="js/activity-gate.js"></script>
 *      <script>initActivityGate('sias.html');</script>
 *
 *    Pass the exact activity_slug value used when the teacher generated the link.
 *
 * UNTIL a page calls initActivityGate(), this file does nothing — safe to add
 * to the repo now without affecting any currently-open page.
 *
 * TEACHER BYPASS: if the visitor is already logged in as a teacher (i.e. has
 * a valid Supabase session — the same login used on dashboard.html), the
 * gate skips the token check entirely and unlocks the activity. This lets a
 * teacher test any activity just by being logged in, no link needed.
 */

async function initActivityGate(expectedSlug) {
  const contentEl = document.getElementById('activity-content');
  const lockedEl = document.getElementById('activity-locked');

  const showLocked = () => {
    if (contentEl) contentEl.style.display = 'none';
    if (lockedEl) lockedEl.style.display = '';
  };
  const showContent = () => {
    if (contentEl) contentEl.style.display = '';
    if (lockedEl) lockedEl.style.display = 'none';
  };

  if (!window.sb) {
    console.error('activity-gate: supabase-config.js must be loaded before activity-gate.js');
    showLocked();
    return;
  }

  // Teacher bypass: if the visitor is logged in as a teacher (same auth
  // used on dashboard.html), skip the token check entirely — teachers can
  // preview and test every activity without generating a link first.
  try {
    const { data: { session } } = await window.sb.auth.getSession();
    if (session) {
      showContent();
      return;
    }
  } catch (err) {
    console.error('activity-gate: session check failed', err);
    // fall through to token check
  }

  const params = new URLSearchParams(window.location.search);
  const token = params.get('access');

  if (!token) {
    showLocked();
    return;
  }

  try {
    const { data, error } = await window.sb.rpc('validate_activity_link', {
      link_token: token
    });

    if (error) {
      console.error('activity-gate: validation error', error);
      showLocked();
      return;
    }

    const result = Array.isArray(data) ? data[0] : data;

    if (result && result.is_valid && result.activity_slug === expectedSlug) {
      showContent();
    } else {
      showLocked();
    }
  } catch (err) {
    console.error('activity-gate: unexpected error', err);
    showLocked();
  }
}
