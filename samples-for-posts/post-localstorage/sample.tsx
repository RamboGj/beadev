import { type ReactNode, useState } from "react";

enum SignupSteps {
	START = 0,
	EMAIL = 1,
	VERIFY_CODE = 2,
}

export interface StepProps {
	handleUpdateStep: () => void;
}

export function Step1({ handleUpdateStep }: StepProps) {
	return (
		<div>
			<h1 className="text-5xl font-SatoshiBold">Hello step 1</h1>

			<button type="button" onClick={handleUpdateStep}>
				Next Step
			</button>
		</div>
	);
}

export function Step2({ handleUpdateStep }: StepProps) {
	return (
		<div>
			<h1 className="text-5xl font-SatoshiBold">Hello step 2</h1>

			<button type="button" onClick={handleUpdateStep}>
				Next Step
			</button>
		</div>
	);
}

export function Step3({ handleUpdateStep }: StepProps) {
	return (
		<div>
			<h1 className="text-5xl font-SatoshiBold">Hello step 3</h1>

			<button type="button" onClick={handleUpdateStep}>
				Finish form
			</button>
		</div>
	);
}

export function SignupForm() {
	const [step, setStep] = useState<SignupSteps>(SignupSteps.START);

	function handleUpdateStep() {
		setStep((prev) => prev + 1);
	}

	const SIGNUP_STEPS_MAP = new Map<SignupSteps, ReactNode>([
		[
			SignupSteps.START,
			<Step1 key="step-1" handleUpdateStep={handleUpdateStep} />,
		],
		[
			SignupSteps.START,
			<Step2 key="step-2" handleUpdateStep={handleUpdateStep} />,
		],
		[
			SignupSteps.START,
			<Step3 key="step-3" handleUpdateStep={handleUpdateStep} />,
		],
	]);

	return SIGNUP_STEPS_MAP.get(step);
}
