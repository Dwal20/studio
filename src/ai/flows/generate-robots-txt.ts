'use server';

/**
 * @fileOverview Generates a robots.txt file to prevent search engine crawlers from indexing the site.
 *
 * - generateRobotsTxt - A function that generates the robots.txt content.
 * - GenerateRobotsTxtOutput - The return type for the generateRobotsTxt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRobotsTxtOutputSchema = z.object({
  robotsTxt: z
    .string()
    .describe("The content of the robots.txt file, which should include 'User-agent: * Disallow: /' to prevent search engine crawling."),
});
export type GenerateRobotsTxtOutput = z.infer<typeof GenerateRobotsTxtOutputSchema>;

export async function generateRobotsTxt(): Promise<GenerateRobotsTxtOutput> {
  return generateRobotsTxtFlow();
}

const generateRobotsTxtPrompt = ai.definePrompt({
  name: 'generateRobotsTxtPrompt',
  output: {schema: GenerateRobotsTxtOutputSchema},
  prompt: `You are an expert in website SEO and robots.txt file creation.

  Create a robots.txt file that prevents all search engine crawlers from indexing the site.
  The robots.txt file should contain the following:
  User-agent: *
  Disallow: /

  Return the complete robots.txt file content.
`,
});

const generateRobotsTxtFlow = ai.defineFlow({
  name: 'generateRobotsTxtFlow',
  outputSchema: GenerateRobotsTxtOutputSchema,
}, async () => {
  const {output} = await generateRobotsTxtPrompt({});
  return output!;
});
