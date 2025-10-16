"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface EnrollmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EnrollmentModal({ open, onOpenChange }: EnrollmentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Salesforce Bootcamp Application</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <iframe
            aria-label="Salesforce Bootcamp - Application Form"
            frameBorder="0"
            style={{ height: "500px", width: "100%", border: "none" }}
            src="https://forms.zohopublic.com/dekodecamp1/form/SalesforceBootcampApplicationForm/formperma/QCVClT5QfZpxY85MSU0vRq7KYYrjY30Zc_sciJk-iTE"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
