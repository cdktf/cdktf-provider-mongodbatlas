// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamPrivatelinkEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name of Privatelink connected cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Sub-Domain name of Confluent cluster. These are typically your availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}
  */
  readonly dnsSubDomain?: string[];
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * Provider where the Kafka cluster is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}
  */
  readonly providerName: string;
  /**
  * Domain name of Confluent cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}
  */
  readonly region?: string;
  /**
  * Service Endpoint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}
  */
  readonly serviceEndpointId?: string;
  /**
  * Vendor who manages the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}
  */
  readonly vendor: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint}
*/
export class StreamPrivatelinkEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_stream_privatelink_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamPrivatelinkEndpoint to import
  * @param importFromId The id of the existing StreamPrivatelinkEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamPrivatelinkEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_stream_privatelink_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/resources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamPrivatelinkEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: StreamPrivatelinkEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_stream_privatelink_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.26.1',
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
    this._dnsDomain = config.dnsDomain;
    this._dnsSubDomain = config.dnsSubDomain;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
    this._region = config.region;
    this._serviceEndpointId = config.serviceEndpointId;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // dns_sub_domain - computed: false, optional: true, required: false
  private _dnsSubDomain?: string[]; 
  public get dnsSubDomain() {
    return this.getListAttribute('dns_sub_domain');
  }
  public set dnsSubDomain(value: string[]) {
    this._dnsSubDomain = value;
  }
  public resetDnsSubDomain() {
    this._dnsSubDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSubDomainInput() {
    return this._dnsSubDomain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_endpoint_id - computed: true, optional: false, required: false
  public get interfaceEndpointId() {
    return this.getStringAttribute('interface_endpoint_id');
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_endpoint_id - computed: false, optional: true, required: false
  private _serviceEndpointId?: string; 
  public get serviceEndpointId() {
    return this.getStringAttribute('service_endpoint_id');
  }
  public set serviceEndpointId(value: string) {
    this._serviceEndpointId = value;
  }
  public resetServiceEndpointId() {
    this._serviceEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointIdInput() {
    return this._serviceEndpointId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      dns_sub_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSubDomain),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
      region: cdktf.stringToTerraform(this._region),
      service_endpoint_id: cdktf.stringToTerraform(this._serviceEndpointId),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_sub_domain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSubDomain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
