# `streamPrivatelinkEndpoint` Submodule <a name="`streamPrivatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamPrivatelinkEndpoint <a name="StreamPrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_privatelink_endpoint

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  provider_name: str,
  vendor: str,
  dns_domain: str = None,
  dns_sub_domain: typing.List[str] = None,
  region: str = None,
  service_endpoint_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Provider where the Kafka cluster is deployed. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.vendor">vendor</a></code> | <code>str</code> | Vendor who manages the Kafka cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsDomain">dns_domain</a></code> | <code>str</code> | Domain name of Privatelink connected cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsSubDomain">dns_sub_domain</a></code> | <code>typing.List[str]</code> | Sub-Domain name of Confluent cluster. These are typically your availability zones. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Domain name of Confluent cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.serviceEndpointId">service_endpoint_id</a></code> | <code>str</code> | Service Endpoint ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.projectId"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.providerName"></a>

- *Type:* str

Provider where the Kafka cluster is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.vendor"></a>

- *Type:* str

Vendor who manages the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}

---

##### `dns_domain`<sup>Optional</sup> <a name="dns_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsDomain"></a>

- *Type:* str

Domain name of Privatelink connected cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}

---

##### `dns_sub_domain`<sup>Optional</sup> <a name="dns_sub_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.dnsSubDomain"></a>

- *Type:* typing.List[str]

Sub-Domain name of Confluent cluster. These are typically your availability zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.region"></a>

- *Type:* str

Domain name of Confluent cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}

---

##### `service_endpoint_id`<sup>Optional</sup> <a name="service_endpoint_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.Initializer.parameter.serviceEndpointId"></a>

- *Type:* str

Service Endpoint ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain">reset_dns_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain">reset_dns_sub_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId">reset_service_endpoint_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_dns_domain` <a name="reset_dns_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsDomain"></a>

```python
def reset_dns_domain() -> None
```

##### `reset_dns_sub_domain` <a name="reset_dns_sub_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetDnsSubDomain"></a>

```python
def reset_dns_sub_domain() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_endpoint_id` <a name="reset_service_endpoint_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.resetServiceEndpointId"></a>

```python
def reset_service_endpoint_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_privatelink_endpoint

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_privatelink_endpoint

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_privatelink_endpoint

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_privatelink_endpoint

streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamPrivatelinkEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamPrivatelinkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamPrivatelinkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId">interface_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput">dns_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput">dns_sub_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput">service_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput">vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain">dns_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain">dns_sub_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId">service_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_endpoint_id`<sup>Required</sup> <a name="interface_endpoint_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.interfaceEndpointId"></a>

```python
interface_endpoint_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `dns_domain_input`<sup>Optional</sup> <a name="dns_domain_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomainInput"></a>

```python
dns_domain_input: str
```

- *Type:* str

---

##### `dns_sub_domain_input`<sup>Optional</sup> <a name="dns_sub_domain_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomainInput"></a>

```python
dns_sub_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_endpoint_id_input`<sup>Optional</sup> <a name="service_endpoint_id_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointIdInput"></a>

```python
service_endpoint_id_input: str
```

- *Type:* str

---

##### `vendor_input`<sup>Optional</sup> <a name="vendor_input" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendorInput"></a>

```python
vendor_input: str
```

- *Type:* str

---

##### `dns_domain`<sup>Required</sup> <a name="dns_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

---

##### `dns_sub_domain`<sup>Required</sup> <a name="dns_sub_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.dnsSubDomain"></a>

```python
dns_sub_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_endpoint_id`<sup>Required</sup> <a name="service_endpoint_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.serviceEndpointId"></a>

```python
service_endpoint_id: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamPrivatelinkEndpointConfig <a name="StreamPrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import stream_privatelink_endpoint

streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  provider_name: str,
  vendor: str,
  dns_domain: str = None,
  dns_sub_domain: typing.List[str] = None,
  region: str = None,
  service_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName">provider_name</a></code> | <code>str</code> | Provider where the Kafka cluster is deployed. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor">vendor</a></code> | <code>str</code> | Vendor who manages the Kafka cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain">dns_domain</a></code> | <code>str</code> | Domain name of Privatelink connected cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain">dns_sub_domain</a></code> | <code>typing.List[str]</code> | Sub-Domain name of Confluent cluster. These are typically your availability zones. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region">region</a></code> | <code>str</code> | Domain name of Confluent cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId">service_endpoint_id</a></code> | <code>str</code> | Service Endpoint ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#project_id StreamPrivatelinkEndpoint#project_id}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Provider where the Kafka cluster is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#provider_name StreamPrivatelinkEndpoint#provider_name}

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

Vendor who manages the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#vendor StreamPrivatelinkEndpoint#vendor}

---

##### `dns_domain`<sup>Optional</sup> <a name="dns_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

Domain name of Privatelink connected cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#dns_domain StreamPrivatelinkEndpoint#dns_domain}

---

##### `dns_sub_domain`<sup>Optional</sup> <a name="dns_sub_domain" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.dnsSubDomain"></a>

```python
dns_sub_domain: typing.List[str]
```

- *Type:* typing.List[str]

Sub-Domain name of Confluent cluster. These are typically your availability zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#dns_sub_domain StreamPrivatelinkEndpoint#dns_sub_domain}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Domain name of Confluent cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#region StreamPrivatelinkEndpoint#region}

---

##### `service_endpoint_id`<sup>Optional</sup> <a name="service_endpoint_id" id="@cdktf/provider-mongodbatlas.streamPrivatelinkEndpoint.StreamPrivatelinkEndpointConfig.property.serviceEndpointId"></a>

```python
service_endpoint_id: str
```

- *Type:* str

Service Endpoint ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/stream_privatelink_endpoint#service_endpoint_id StreamPrivatelinkEndpoint#service_endpoint_id}

---



