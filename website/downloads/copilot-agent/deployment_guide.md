# Deployment Guide — RiskID Copilot Agent

Step-by-step instructions for deploying the RiskID Copilot agent in a Microsoft 365 tenant using Copilot Studio.

---

## Prerequisites

| Requirement | Details |
|------------|---------|
| **Microsoft 365 licence** | E3/E5 or equivalent with Copilot Studio entitlement |
| **Copilot Studio access** | Admin or Maker role in the target environment |
| **Power Platform environment** | Dataverse-enabled environment (default or dedicated) |
| **Teams deployment** (optional) | Teams Admin Centre access for org-wide publishing |
| **SharePoint site** (optional) | For hosting the knowledge base as a searchable data source |

---

## Architecture Overview

```
+---------------------------+
|   Microsoft Teams         |
|   (User Interface)        |
+------------+--------------+
             |
+------------v--------------+
|   Copilot Studio Agent    |
|   - System Prompt         |
|   - Topics (34)           |
|   - Knowledge Base         |
+------------+--------------+
             |
+------------v--------------+
|   Data Sources             |
|   - Knowledge Base (.md)  |
|   - Template Pack (.xlsx) |
|   - Prompt Library (.md)  |
+---------------------------+
```

All data stays within the Microsoft 365 tenant. No external API calls. No data leaves the organisation's boundary.

---

## Step 1: Create the Agent

1. Navigate to **https://copilotstudio.microsoft.com**
2. Select the target **Environment** (top-right dropdown)
3. Click **Create** > **New agent**
4. Configure:
   - **Name**: `RiskID Copilot`
   - **Description**: `Expert risk identification assistant based on the Bank Risk Identification methodology. Generates templates, frameworks, and assessments for bank risk professionals.`
   - **Icon**: Upload the EON Risk Services logo (optional — use institution's own branding if preferred)
   - **Instructions**: Paste the full contents of `system_prompt.md`

5. Click **Create**

---

## Step 2: Add Knowledge Base

The knowledge base gives the agent structured reference material to draw on when generating artifacts.

### Option A: Direct Upload (Simplest)

1. In the agent editor, go to **Knowledge** (left sidebar)
2. Click **Add knowledge**
3. Select **Files**
4. Upload `knowledge_base.md`
5. Copilot Studio will index the content automatically

### Option B: SharePoint Site (Recommended for Teams)

1. Create a SharePoint site (e.g., `RiskID-Knowledge`)
2. Upload to the site's document library:
   - `knowledge_base.md`
   - `Risk_Identification_Template_Pack.xlsx`
   - `Copilot_Prompt_Library.md`
3. In the agent editor, go to **Knowledge**
4. Click **Add knowledge** > **SharePoint**
5. Enter the SharePoint site URL
6. Select the document library
7. The agent will index all uploaded documents

### Option C: Dataverse Table (Most Structured)

For institutions wanting maximum control:
1. Create a Dataverse table with columns matching the knowledge base sections
2. Import the knowledge base content row by row
3. Connect the Dataverse table as a knowledge source

---

## Step 3: Configure Topics

Topics define what the agent can do and how conversations are triggered.

### 3a: Configure Conversation Starters

1. Go to **Topics** > **System** > **Greeting**
2. Edit the greeting message:

```
Welcome to RiskID Copilot. I can help you build, operate, and maintain a comprehensive risk identification process.

I can generate templates, frameworks, and assessments across all six phases of the methodology. To get started, tell me:

- What artifact do you need?
- What type of institution are you at? (retail bank, investment bank, universal bank)
- Which jurisdiction? (UK, US, EU, Switzerland, Australia)

Or select one of the quick actions below.
```

3. Add **Quick Actions** (conversation starters):
   - Build a risk taxonomy for my institution
   - Help me prepare a SWIFT workshop
   - Score a risk using the four-dimensional framework
   - Create a bow-tie analysis for a specific risk
   - Generate a Principal Risk Report template
   - Map my risks to ICAAP stress scenarios

### 3b: Create Custom Topics

For each of the 34 topics defined in `topic_map.md`:

1. Go to **Topics** > **Custom** > **+ New topic** > **From blank**
2. Set the **Name** (e.g., "Foundation — Risk Taxonomy")
3. Add **Trigger phrases** from the topic map
4. Build the conversation flow:
   - **Ask questions** to collect required inputs (institution type, jurisdiction, etc.)
   - **Generate response** using the knowledge base and system prompt
   - **Format output** as structured tables or templates

**Example flow for Topic 1 (Risk Taxonomy):**

```
Trigger: "risk taxonomy", "L1 L2 L3", "classify risks"
    |
    v
Ask: "What type of institution is this for?"
    Options: Retail Bank | Investment Bank | Universal Bank | Other
    |
    v
Ask: "Which jurisdiction?"
    Options: UK (PRA) | US (Fed) | EU (ECB) | Switzerland (FINMA) | Australia (APRA) | Other
    |
    v
Generate: Use system prompt + knowledge base to create customised taxonomy
    |
    v
Output: Formatted taxonomy table with L1/L2/L3 and regulatory mapping
```

### 3c: Fallback Topic

Configure the **Fallback** topic to handle unrecognised queries:

```
I'm not sure I understand that request. I can help with:

- Risk taxonomy design (Phase 1)
- SWIFT workshop preparation (Phase 2)
- Risk assessment and scoring (Phase 4)
- Risk interaction analysis (Phase 5)
- Risk inventory documentation (Phase 6)
- ICAAP/ILAAP/CCAR integration
- Regulatory compliance mapping

Could you rephrase your question, or select one of these areas?
```

---

## Step 4: Configure Generative AI Settings

1. Go to **Settings** > **Generative AI**
2. Enable **Generative answers**
3. Set **Content moderation**: Medium (allows professional financial content)
4. Under **Knowledge sources**, ensure the uploaded knowledge base is enabled
5. Set **Citation behaviour**: On (users can see which knowledge source informed the response)

---

## Step 5: Test the Agent

1. Click **Test your agent** (bottom-left panel)
2. Run through these test scenarios:

| Test | Expected Behaviour |
|------|--------------------|
| "Build a risk taxonomy for a UK retail bank" | Asks for confirmation, generates 3-level taxonomy with PRA mapping |
| "Score credit risk for a commercial real estate portfolio" | Asks clarifying questions, produces four-dimensional scoring worksheet |
| "What is the SWIFT methodology?" | Explains the six-stage workshop with guide words |
| "Create a bow-tie for cyber risk" | Generates structured bow-tie with causes, barriers, consequences |
| "Help me write a Principal Risk Report" | Produces 10-item template with section guidance |
| "What's the weather today?" | Politely declines, redirects to in-scope topics |
| "Give me an actual risk score for Barclays" | Declines — explains it works with illustrative data only |

3. Verify that all conversation starters work
4. Check that the agent asks for jurisdiction and institution type when needed
5. Confirm citations reference the knowledge base

---

## Step 6: Publish to Teams

### 6a: Internal (Test Group)

1. Click **Publish** (top-right)
2. Select **Microsoft Teams**
3. Choose **Share with specific people** or a Teams channel
4. Add pilot users (risk identification team)
5. Click **Publish**

Users will see the agent in their Teams chat as a new bot.

### 6b: Organisation-Wide

1. After pilot testing, click **Publish** > **Microsoft Teams**
2. Select **Submit for admin approval**
3. In **Teams Admin Centre** (admin.teams.microsoft.com):
   - Go to **Teams apps** > **Manage apps**
   - Find `RiskID Copilot`
   - Set availability: **Allowed for specific groups** or **Available for everyone**
4. Approve and publish

### 6c: SharePoint / Web (Alternative)

1. Click **Publish** > **Custom website**
2. Copy the embed code
3. Paste into a SharePoint page or internal portal
4. Users interact via web chat widget

---

## Step 7: Ongoing Maintenance

### Content Updates

When the methodology evolves or new regulatory requirements emerge:

1. Update `knowledge_base.md` with new content
2. Re-upload to SharePoint or Copilot Studio knowledge source
3. The agent will automatically use updated content after re-indexing

### Monitoring

1. Go to **Analytics** in Copilot Studio
2. Monitor:
   - **Session count**: How many conversations per week
   - **Resolution rate**: How often users get what they need
   - **Escalation rate**: How often the fallback topic triggers
   - **Top topics**: Which artifacts are most requested
   - **User satisfaction**: Thumbs up/down ratings

### Version Control

Maintain versions of:
- `system_prompt.md` — the agent's core instructions
- `knowledge_base.md` — the methodology reference
- `topic_map.md` — the conversation structure

Tag versions with dates (e.g., `v1.0 — 2025-Q1`) and document changes.

---

## Security and Compliance Notes

| Concern | Mitigation |
|---------|-----------|
| **Data residency** | All data stays in the M365 tenant. No external API calls. |
| **Access control** | Agent access controlled via Teams Admin Centre or SharePoint permissions. |
| **Confidentiality** | Agent works with illustrative data only. It never asks for or stores actual risk scores, loss data, or internal metrics. |
| **Audit trail** | Copilot Studio logs all conversations. Exportable for compliance. |
| **Model updates** | The underlying Azure OpenAI model is managed by Microsoft within the tenant's AI governance settings. |
| **Content filtering** | Azure AI Content Safety applies to all agent responses. |

---

## File Manifest

| File | Purpose | Size |
|------|---------|------|
| `system_prompt.md` | Agent instructions and behaviour definition | ~10 KB |
| `knowledge_base.md` | Structured methodology reference | ~15 KB |
| `topic_map.md` | Topic definitions and conversation starters | ~12 KB |
| `deployment_guide.md` | This document | ~8 KB |
| `Risk_Identification_Template_Pack.xlsx` | Excel template pack (optional knowledge source) | ~55 KB |
| `Copilot_Prompt_Library.md` | Prompt library (optional knowledge source) | ~25 KB |

---

## Support

For methodology questions: **info@eonriskservices.com**

For technical deployment issues: Refer to [Microsoft Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/).
