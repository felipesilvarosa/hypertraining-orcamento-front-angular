import { Item } from './itens.model';
import { OrcamentoPost } from './orcamentoPost.model';

export interface OrcamentoRequisicaoPost {
  orcamento: OrcamentoPost;
  itens: Item[];
}
