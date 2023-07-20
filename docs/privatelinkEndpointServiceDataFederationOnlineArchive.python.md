# `mongodbatlas_privatelink_endpoint_service_data_federation_online_archive`

Refer to the Terraform Registory for docs: [`mongodbatlas_privatelink_endpoint_service_data_federation_online_archive`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive).

# `privatelinkEndpointServiceDataFederationOnlineArchive` Submodule <a name="`privatelinkEndpointServiceDataFederationOnlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchive <a name="PrivatelinkEndpointServiceDataFederationOnlineArchive" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_data_federation_online_archive

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  project_id: str,
  provider_name: str,
  comment: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_data_federation_online_archive

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_data_federation_online_archive

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_data_federation_online_archive

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_data_federation_online_archive

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  project_id: str,
  provider_name: str,
  comment: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



