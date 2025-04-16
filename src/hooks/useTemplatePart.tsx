import {apiFetch} from "../utils/apiFetch";

export type TemplatePart = {
    id: number;
    title: {
        rendered: string;
        raw: string;
    };
    slug: string;
    content: {
        raw: string;
    }
    description: string;
    rendered_content: string;
};

export const useTemplatePart = async (id: string) => {
    const blockResponse = await apiFetch(`wp/v2/template-parts/${id}`);

    if (!blockResponse.ok) {
        return '';
    }

    const parsedJson: TemplatePart = await blockResponse.json();

    if (!parsedJson.rendered_content) {
        return '';
    }

    return parsedJson.rendered_content;
}
