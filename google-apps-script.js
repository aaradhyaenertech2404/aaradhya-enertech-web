/**
 * Google Apps Script for Aaradhya Enertech Website Enquiry Form
 * 
 * INSTRUCTIONS TO UPDATE YOUR GOOGLE SHEET:
 * 1. Open your Google Sheet (from your screenshot).
 * 2. In column G1 (next to "Requirement"), type the header: "Specifications / Message"
 * 3. In the top menu of your Google Sheet, click on "Extensions" -> "Apps Script".
 * 4. Replace all code in the editor with this script.
 * 5. Click "Save" (disk icon).
 * 6. Click "Deploy" -> "Manage deployments" -> Click Edit (pencil icon) -> Select "New version" -> Click "Deploy".
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Company", "Phone", "Email", "Requirement", "Specifications / Message"]);
    } else {
      // Check if Column G header exists, if not set it
      var headerVal = sheet.getRange(1, 7).getValue();
      if (!headerVal || headerVal.toString().trim() === "") {
        sheet.getRange(1, 7).setValue("Specifications / Message");
      }
    }

    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "MM/dd/yyyy HH:mm:ss");
    var p = e.parameter || {};

    var name = p.name || p.Name || "";
    var company = p.company || p.Company || "";
    var phone = p.phone || p.Phone || "";
    var email = p.email || p.Email || "";
    var requirement = p.requirement || p.Requirement || p.product || p.service || "";
    var message = p.message || p.Message || p.specifications || p.Specifications || "";

    sheet.appendRow([
      timestamp,
      name,
      company,
      phone,
      email,
      requirement,
      message
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Aaradhya Enertech Form API is active.");
}
