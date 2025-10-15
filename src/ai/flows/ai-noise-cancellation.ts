'use server';
/**
 * @fileOverview Implements AI-powered noise cancellation for audio calls.
 *
 * - aiNoiseCancellation - A function that applies noise cancellation to audio data.
 * - AiNoiseCancellationInput - The input type for the aiNoiseCancellation function.
 * - AiNoiseCancellationOutput - The return type for the aiNoiseCancellation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const AiNoiseCancellationInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The audio data as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AiNoiseCancellationInput = z.infer<typeof AiNoiseCancellationInputSchema>;

const AiNoiseCancellationOutputSchema = z.object({
  cleanedAudioDataUri: z
    .string()
    .describe('The noise-reduced audio data, as a base64 encoded data URI.'),
});
export type AiNoiseCancellationOutput = z.infer<typeof AiNoiseCancellationOutputSchema>;

export async function aiNoiseCancellation(input: AiNoiseCancellationInput): Promise<AiNoiseCancellationOutput> {
  return aiNoiseCancellationFlow(input);
}

const aiNoiseCancellationPrompt = ai.definePrompt({
  name: 'aiNoiseCancellationPrompt',
  input: {schema: AiNoiseCancellationInputSchema},
  output: {schema: AiNoiseCancellationOutputSchema},
  prompt: `You are an AI audio processing expert.  Your task is to reduce background noise in the provided audio data.

  Input audio: {{media url=audioDataUri}}
  Output: A data URI containing the noise-reduced audio.
  Important: Return ONLY the data URI and nothing else.`, // Added important instruction
});


const aiNoiseCancellationFlow = ai.defineFlow(
  {
    name: 'aiNoiseCancellationFlow',
    inputSchema: AiNoiseCancellationInputSchema,
    outputSchema: AiNoiseCancellationOutputSchema,
  },
  async input => {
    // Convert audio to text using Gemini
    const {output} = await aiNoiseCancellationPrompt(input);

    if (!output) {
      throw new Error('Noise cancellation failed: No output from the prompt.');
    }

    // Ensure the output is a string before returning
    if (typeof output.cleanedAudioDataUri !== 'string') {
      throw new Error('Noise cancellation failed: Unexpected output format.');
    }
    return {
      cleanedAudioDataUri: output.cleanedAudioDataUri,
    };
  }
);
