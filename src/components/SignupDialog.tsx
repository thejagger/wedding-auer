import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Textarea} from "./ui/textarea";
import {supabase} from "@/lib/supabase-client";
import {Heart} from "lucide-react";

// Form validation schema
const signupSchema = z.object({
  name: z.string().min(1, "Bitte gebt euren Namen ein!").max(100, "Der eingegebene Name ist zu lang."),
  amount: z.coerce.number().int().min(1, "Die Anzahl muss mindestens 1 sein."),
  description: z.string().max(500, "Die Beschreibung ist zu lange").optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SESSION_KEY = "birthday_signup_session";

export function SignupDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      amount: 1,
      description: "",
    },
  });

  // Check if user has already signed up
  useEffect(() => {
    const sessionId = sessionStorage.getItem(SESSION_KEY);
    if (sessionId) {
      setHasSignedUp(true);
    }
  }, []);

  // Generate or retrieve session ID
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  };

  const onSubmit = async (data: SignupFormData) => {
    if (hasSignedUp) {
      setError("Ihr seid bereits angemeldet!");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const sessionId = getSessionId();

      const {error: supabaseError} = await supabase
          .from("birthday_signup")
          .insert({
            session_id: sessionId,
            name: data.name,
            amount: data.amount,
            description: data.description || null,
          });

      if (supabaseError) {
        throw supabaseError;
      }

      // Mark as signed up
      setHasSignedUp(true);
      setSuccess(true);
      reset();

      // Close dialog after 2 seconds
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Error signing up:", err);
      setError(
          err instanceof Error
              ? err.message
              : "Failed to sign up. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form and errors when closing
      reset();
      setError(null);
      setSuccess(false);
    }
    setOpen(newOpen);
  };

  return (
      <AlertDialog open={open} onOpenChange={handleOpenChange}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="border-rose-200 hover:bg-rose-50">
            {hasSignedUp ? (
              "Danke für die Anmeldung"
            ) : (
              <>
                <Heart className="h-4 w-4 mr-2 fill-rose-500" />
                Anmeldung
              </>
            )}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Anmeldung für die Hochzeit!</AlertDialogTitle>
            <AlertDialogDescription>
              {hasSignedUp
                  ? "Sie haben sich bereits für diese Hochzeit angemeldet. Vielen Dank!"
                  : "Bitte füllen Sie Ihre Daten aus, um sich für die Hochzeit anzumelden."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          {!hasSignedUp && !success && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                      id="name"
                      placeholder="Eurer Name"
                      {...register("name")}
                      disabled={isSubmitting}
                  />
                  {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Anzahl an Gästen *</Label>
                  <Input
                      id="amount"
                      type="number"
                      min="1"
                      placeholder="1"
                      {...register("amount")}
                      disabled={isSubmitting}
                  />
                  {errors.amount && (
                      <p className="text-sm text-red-500">{errors.amount.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Zusatz (optional)</Label>
                  <Textarea
                      id="description"
                      placeholder="Ihr persönlicher Antrag oder Spezialwünsche?"
                      rows={3}
                      {...register("description")}
                      disabled={isSubmitting}
                  />
                  {errors.description && (
                      <p className="text-sm text-red-500">
                        {errors.description.message}
                      </p>
                  )}
                </div>

                {error && (
                    <div className="rounded-md bg-red-50 p-3">
                      <p className="text-sm text-red-600">
                        {error}
                      </p>
                    </div>
                )}

                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isSubmitting}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                      type="submit"
                      disabled={isSubmitting}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                      }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
          )}

          {success && (
              <div className="py-6">
                <div
                    className="rounded-md bg-green-50 p-4 text-center">
                  <p className="text-lg font-medium text-green-600 flex items-center justify-center gap-2">
                    <Heart className="h-5 w-5 fill-green-600" />
                    Erfolg! Ihr habt euch erfolgreich für die Hochzeit angemeldet!
                  </p>
                </div>
              </div>
          )}

          {hasSignedUp && !success && (
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialog>
  );
}
