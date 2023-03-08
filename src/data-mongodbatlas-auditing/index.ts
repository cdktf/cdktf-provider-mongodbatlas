// https://www.terraform.io/docs/providers/mongodbatlas/d/auditing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasAuditingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/auditing#id DataMongodbatlasAuditing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/auditing#project_id DataMongodbatlasAuditing#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/auditing mongodbatlas_auditing}
*/
export class DataMongodbatlasAuditing extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_auditing";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/d/auditing mongodbatlas_auditing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasAuditingConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasAuditingConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_auditing',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.1',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_authorization_success - computed: true, optional: false, required: false
  public get auditAuthorizationSuccess() {
    return this.getBooleanAttribute('audit_authorization_success');
  }

  // audit_filter - computed: true, optional: false, required: false
  public get auditFilter() {
    return this.getStringAttribute('audit_filter');
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
